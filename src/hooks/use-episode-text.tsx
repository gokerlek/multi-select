interface EpisodeTextProps {
  episode: string[];
}

const getEpisodeText = (count: number) => {
  if (count > 1) return `${count} episodes`;
  if (count === 1) return "1 episode";
  return "No episodes";
};
export const useEpisodeText = ({ episode }: EpisodeTextProps) => {
  const episode_count = episode?.length ?? 0;

  return getEpisodeText(episode_count);
};
