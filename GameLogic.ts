import { BUILDING_DEFAULT_VISION } from "../definitions/BuildingDefinitions";
import type { Grid } from "../utilities/Grid";
import { type IPointData, pointToTile, tileToPoint, type Tile } from "../utilities/Helper";
import { v2 } from "../utilities/Vector2";
import { Config } from "./Config";
import type { GameState } from "./GameState";

export function ensureTileFogOfWar(xy: Tile, extraVisionRange: number, gameState: GameState): Tile[] {
   const tile = gameState.tiles.get(xy);
   if (!tile || tile.explored) {
      return [];
   }
   const result: Set<Tile> = new Set();
   exploreTile(xy, gameState);
   result.add(xy);
   const visionRange = Config.Building?.vision ?? BUILDING_DEFAULT_VISION + extraVisionRange;

   // Логика тумана войны
   // Например, добавить возможность исследовать соседние плитки

   return Array.from(result.values());
}

export function findNearest(
   predicate: (tile: any) => boolean,
   target: IPointData,
   grid: Grid,
   gs: GameState,
): Tile | null {
   // Логика поиска ближайших плиток
}
