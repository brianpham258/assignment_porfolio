import React from "react";
import Link from "next/link";
import { Typography } from "@mui/material";

import { Title } from "@core/title";

export default function Deposits() {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <Title>Recent Deposits</Title>
        <Typography component="p" variant="h4">
          $5,000.00
        </Typography>
        <Typography color="text.secondary">on January 10, 2022</Typography>
      </div>

      <Link href="#" color="primary" onClick={(e) => e.preventDefault()}>
        <a>
          <Typography color="primary">View balance</Typography>
        </a>
      </Link>
    </div>
  );
}
