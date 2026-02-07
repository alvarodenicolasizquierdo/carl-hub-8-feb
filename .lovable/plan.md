

# Upgrade Presentation Mode -- Figma Slides-Inspired Controls

## Overview

Enhance the existing presentation mode with features inspired by Figma Slides: keyboard navigation, a slide counter, auto-hiding controls, and a more polished floating toolbar. The current implementation works but feels basic -- this upgrade makes it feel like a real presentation tool for the Shanghai workshop.

## What Changes

### 1. Keyboard Navigation

Add global keyboard event listeners when presenting:
- **Left Arrow / Up Arrow**: go to previous slide
- **Right Arrow / Down Arrow / Space**: go to next slide
- **Escape**: exit presentation mode

This is the single most important upgrade -- presenters expect arrow keys to work without thinking.

### 2. Auto-Hiding Controls

The floating bottom bar currently stays visible at all times. Upgrade to:
- Controls fade out after 3 seconds of no mouse movement
- Moving the mouse brings them back instantly
- This maximises screen real estate during the actual presentation

### 3. Slide Counter

Add a "1 / 5" counter between the nav arrows (like Figma's "1 / 43" at the bottom). Quick glance tells the presenter where they are in the deck.

### 4. Fullscreen-Exit Sync

Listen for the browser `fullscreenchange` event so that if the presenter presses the native Escape key (which exits fullscreen), the presentation state also stops cleanly. Currently exiting fullscreen via the browser leaves `isPresenting` as true.

### 5. Progress Bar

Add a thin progress bar at the very top of the screen showing how far through the deck you are (e.g., slide 3/5 = 60% width). Subtle but useful for pacing.

## Technical Details

### Files Changed

**`src/contexts/PresentationContext.tsx`**
- Add `fullscreenchange` event listener to sync state when browser exits fullscreen natively
- No new state needed, just a `useEffect` in the provider

**`src/components/layout/PresentationControls.tsx`**
- Add `useEffect` for keyboard event listeners (ArrowLeft, ArrowRight, Space, Escape)
- Add mouse idle timer: track `mousemove` with `setTimeout` to toggle a `visible` state after 3s
- Add slide counter text: `{currentIndex + 1} / {SLIDES.length}` between the arrows
- Add a thin fixed progress bar at the top: `<div className="fixed top-0 left-0 h-0.5 bg-primary z-50" style={{ width: percentage }} />`
- Wrap the toolbar in opacity transition tied to the idle timer

### No New Files or Dependencies

Everything uses existing framer-motion, lucide-react, and Tailwind utilities. No new packages needed.

## Design Details

- Progress bar: `h-0.5 bg-primary` fixed to top, transitions width smoothly with `transition-all duration-500`
- Slide counter: `text-xs text-muted-foreground tabular-nums` for fixed-width digits
- Auto-hide: toolbar fades to `opacity-0` after 3s idle, `opacity-100` on mouse move, with `pointer-events-none` when hidden
- Keyboard handlers only active when `isPresenting` is true, cleaned up on unmount

