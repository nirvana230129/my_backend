import parselmouth

voicePath = input()
sound = parselmouth.Sound(voicePath)

pointProcess = parselmouth.praat.call(sound, "To PointProcess (periodic, cc)", 75, 300)
localJitter = parselmouth.praat.call(pointProcess, "Get jitter (local)", 0, 0, 0.0001, 0.02, 1.3)
rapJitter = parselmouth.praat.call(pointProcess, "Get jitter (rap)", 0, 0, 0.0001, 0.02, 1.3)
localShimmer = parselmouth.praat.call([sound, pointProcess], "Get shimmer (local)", 0, 0, 0.0001, 0.02, 1.3, 1.6)
pitch = parselmouth.praat.call(sound, "To Pitch", 0.0, 75, 300)
meanF0 = parselmouth.praat.call(pitch, "Get mean", 0, 0, 'Hertz')  # get mean pitch

print('{"localShimmer": "',   localShimmer,
      '","localJitter": "',   localJitter,
      '","rapJitter": "',   rapJitter,
      '","F0": "',   meanF0,   '"}', sep='')
