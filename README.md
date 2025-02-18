# React 18+ useEffect Cleanup Function: Avoiding Warnings and Memory Leaks

This repository demonstrates a common issue in React 18 and later versions related to the `useEffect` hook.  Failing to include a cleanup function in `useEffect` when dealing with asynchronous operations (like `fetch` calls) can lead to warnings in the console and potential memory leaks.

The `bug.js` file shows the problematic code. The `bugSolution.js` provides the corrected version with the appropriate cleanup function.

## Problem

The original code makes a fetch request inside the useEffect hook but lacks a return function to clean up the effect. This means that every time the component renders, another fetch request is initiated, and the previous requests are not cleaned up.  This can lead to memory issues and unexpected behavior in the long run.

## Solution

The solution involves adding a return statement to the `useEffect` function that cleans up any ongoing asynchronous operation before the component unmounts or before the next render.