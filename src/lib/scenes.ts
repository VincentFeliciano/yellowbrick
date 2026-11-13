import { asset } from '$app/paths';
import type { AssetPath } from '$app/types';

/** Renders of a LEGO office scene, the camera looking down at the floor first and up at the ceiling last. */
export const scrollFrames = (folder: string, count = 16) =>
	Array.from({ length: count }, (_, i) =>
		asset(`images/${folder}/frame_${String(i).padStart(2, '0')}.webp` as AssetPath)
	);

/** Turntable renders of a LEGO model: one row per camera height (lowest first), one frame per step of a full turn. */
export const spinFrames = (folder: string, rows: number, cols: number) =>
	Array.from({ length: rows }, (_, r) =>
		Array.from({ length: cols }, (_, c) =>
			asset(`images/${folder}/frame_${r}_${String(c).padStart(2, '0')}.webp` as AssetPath)
		)
	);
