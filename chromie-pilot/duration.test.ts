import assert from "node:assert/strict";
import { millisecondsToSeconds } from "./duration";
assert.equal(millisecondsToSeconds(1000), 1);
assert.equal(millisecondsToSeconds(0), 0);
