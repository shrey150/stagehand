import assert from "node:assert/strict";
import { millisecondsToSeconds } from "./duration.ts";

// Synthetic regression assertions, added as source evidence; not executed here.
assert.equal(millisecondsToSeconds(0), 0);
assert.equal(millisecondsToSeconds(1000), 1);
assert.equal(millisecondsToSeconds(2500), 2.5);
assert.equal(millisecondsToSeconds(-1000), -1);
