"use client";

import { useMyPresence, useOthers } from "@liveblocks/react/suspense";
import FollowPointer from "./FollowPointer";

function LiveCursorProvider({ children }: { children: React.ReactNode }) {
  const [myPresence, updateMyPresence] = useMyPresence();
  const others = useOthers();

  function handlePointerMove(e: PointerEvent<HTMLDivElement>) {
    //update from ClientX and ClientY to PageX and PageY for full page cursor tracking
    const cursor = { x: Math.floor(e.pageX), y: Math.floor(e.pageY) };
  }

  function handlePointerLeave() {
    updateMyPresence({ cursor: null });
  }
  return (
    <div onPointerMove={handlePointerMove} onPointerLeave={handlePointerLeave}>
      {/* render cursor */}
      {others
        .filter((other) => other.presence.cursor != null)
        .map(({ connectionId, presence, info }) => (
          <FollowPointer
            key={connectionId}
            info={info}
            x={presence.cursor!.x}
            y={presence.cursor!.y}
          />
        ))}
    </div>
  );
}

export default LiveCursorProvider;
