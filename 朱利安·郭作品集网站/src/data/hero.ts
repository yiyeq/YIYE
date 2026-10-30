// Original layered PNGs, kept separate for future art direction.
const directory = (process.env.NEXT_PUBLIC_BASE_PATH || '') + '/images/portfolio/';
// HTTP preload headers require ASCII URLs; filenames on disk remain unchanged.
const asset = (name: string) => directory + encodeURIComponent(name);
export const heroAssets = {
  background: asset('clean-midnight-background.png'),
  title: asset('金属渐变科技感“PORTFOLIO”字标.png'),
  character: asset('ChatGPT 图像 2026年10月29日 16_39_10.png'),
  star: asset('炫彩液态铬金属星芒.png'),
  robot: asset('可爱未来感机器人吉祥物1.png'),
};

