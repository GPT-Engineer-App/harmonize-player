import { useState } from "react";
import { Container, VStack, Text, IconButton, Box, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Image } from "@chakra-ui/react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";

const songs = [
  {
    title: "Song One",
    artist: "Artist One",
    albumArt: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhbGJ1bSUyMGFydCUyMDF8ZW58MHx8fHwxNzE1ODUyNjkyfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    title: "Song Two",
    artist: "Artist Two",
    albumArt: "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhbGJ1bSUyMGFydCUyMDJ8ZW58MHx8fHwxNzE1ODUyNjkyfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    title: "Song Three",
    artist: "Artist Three",
    albumArt: "https://images.unsplash.com/photo-1542887800-faca0261c9e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhbGJ1bSUyMGFydCUyMDN8ZW58MHx8fHwxNzE1ODUyNjkzfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const playNext = () => {
    setCurrentSongIndex((currentSongIndex + 1) % songs.length);
    setIsPlaying(true);
  };

  const playPrevious = () => {
    setCurrentSongIndex((currentSongIndex - 1 + songs.length) % songs.length);
    setIsPlaying(true);
  };

  const handleSliderChange = (value) => {
    setSliderValue(value);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Image src={songs[currentSongIndex].albumArt} boxSize="200px" borderRadius="md" />
        <Text fontSize="2xl">{songs[currentSongIndex].title}</Text>
        <Text fontSize="lg">{songs[currentSongIndex].artist}</Text>
        <Box width="100%">
          <Slider value={sliderValue} onChange={handleSliderChange}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Box>
        <Box>
          <IconButton aria-label="Previous song" icon={<FaBackward />} onClick={playPrevious} size="lg" mx={2} />
          <IconButton aria-label={isPlaying ? "Pause" : "Play"} icon={isPlaying ? <FaPause /> : <FaPlay />} onClick={togglePlayPause} size="lg" mx={2} />
          <IconButton aria-label="Next song" icon={<FaForward />} onClick={playNext} size="lg" mx={2} />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
