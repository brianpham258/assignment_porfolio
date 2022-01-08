import { IntlProvider } from "react-intl";
import { useSelector } from "react-redux";

import messages from "../lang/messages";
import { wrapper } from "../store/store";
import { useLayoutServices } from "@core/features";

import "../styles/globals.css";

const flattenMessages = (nestedMessages, defalutMessages, prefix = "") => {
  const mergeData = { ...defalutMessages, ...nestedMessages };
  return Object.keys(mergeData).reduce((messages, key) => {
    const defalutValue = defalutMessages[key];
    const value = nestedMessages[key] ? nestedMessages[key] : defalutValue;

    const prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === "string") {
      messages[prefixedKey] = value;
    } else {
      Object.assign(
        messages,
        flattenMessages(value, defalutValue, prefixedKey)
      );
    }

    return messages;
  }, {});
};

const getInitialLanguage = (language) => {
  switch (language) {
    case "en":
      return "en-US";
    case "vi":
      return "vi-VN";
    default:
      return "en-US";
  }
};

function MyApp({ Component, pageProps }) {
  const { getLanguage } = useLayoutServices();
  const currentLanguage = useSelector((state) => getLanguage(state));

  const isServer = typeof window === "undefined";
  const language = getInitialLanguage(
    isServer ? "en" : currentLanguage || window?.sessionStorage?.getItem("ln") || "en"
  );

  return (
    <IntlProvider
      key={language}
      locale={language}
      messages={flattenMessages(messages[language], messages["en-US"])}
      defaultLocale="en-US"
    >
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default wrapper.withRedux(MyApp);
