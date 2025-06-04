import jdenticon from 'jdenticon';

export function generateAndSaveSvg(seed: string): string {
  return jdenticon.toSvg(seed, 100);
}
