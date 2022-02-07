import { useRecoilState } from "recoil";
import { fontSizeState } from "./store";
import React from 'react';

export default function Text() {
    const [fontSize] = useRecoilState(fontSizeState);
    return <p style={{ fontSize }}>This text will increase in size too.</p>;
}
