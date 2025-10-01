"use client"
import {  useCallback } from 'react';
import { useState } from 'react';
export default function useToggle() {
  const [on, setOn] = useState(false);
  const toggle = useCallback(() => setOn((on)=>(!on)), []);
  return { on, toggle, setOn };
}