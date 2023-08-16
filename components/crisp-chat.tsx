"use client";

import { Crisp } from "crisp-sdk-web";

import React, { useEffect } from "react";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("bb62f316-b1b6-4ea3-9e28-89f84ddbb33d");
  }, []);

  return null
};

export default CrispChat;
