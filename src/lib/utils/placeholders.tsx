import { GenericGridPlaceholder } from "lib/Components/ArtworkGrids/GenericGrid"
import { color, Flex } from "palette"
import React, { useContext, useEffect, useMemo, useRef } from "react"
import { View, ViewStyle } from "react-native"
import Animated from "react-native-reanimated"
import { useScreenDimensions } from "./useScreenDimensions"

const PlaceholderContext = React.createContext<{ clock: Animated.Clock }>(null as any)

function useCurrentTime() {
  const isMounted = useMemo(() => {
    return new Animated.Value(1 as number)
  }, [])
  const clock = useMemo(() => {
    return new Animated.Clock()
  }, [])
  useEffect(() => {
    // isMounted starts as true so nothing to do here
    return () => {
      // this is called when the component unmounts
      isMounted.setValue(0)
    }
  }, [])
  Animated.useCode(
    () => Animated.onChange(isMounted, Animated.cond(isMounted, Animated.startClock(clock), Animated.stopClock(clock))),
    []
  )
  return clock
}

export const ProvidePlaceholderContext: React.FC<{}> = ({ children }) => {
  const clock = useCurrentTime()
  return <PlaceholderContext.Provider value={{ clock }} children={children} />
}

export const PlaceholderBox: React.FC<ViewStyle> = ({ children, ...styles }) => {
  const ctx = useContext(PlaceholderContext)
  if (!ctx) {
    throw new Error("You're using a Placeholder outside of a PlaceholderContext")
  }
  const { clock } = ctx
  const verticalOffset = useMemo(() => {
    return new Animated.Value(0 as number)
  }, [])
  const { opacity } = useMemo(() => {
    const offsetClock = Animated.sub(clock, Animated.divide(verticalOffset, 2))
    const scaledClock = Animated.divide(offsetClock, 230)
    const pulse = Animated.sin(scaledClock)
    return { opacity: Animated.sub(1, Animated.divide(pulse, 3)) }
  }, [])
  const ref = useRef<Animated.View>(null)
  return (
    <Animated.View
      ref={ref}
      style={[{ borderRadius: 2 }, { opacity, backgroundColor: color("black10") }, styles] as any}
      onLayout={() => {
        ref.current?.getNode().measureInWindow((_w, h, _x, y) => {
          verticalOffset.setValue(-y + h / 2)
        })
      }}
      children={children}
    />
  )
}

const TEXT_HEIGHT = 12
const TEXT_MARGIN = 7

export const PlaceholderText: React.FC<ViewStyle> = ({ ...props }) => {
  return <PlaceholderBox height={TEXT_HEIGHT} marginBottom={TEXT_MARGIN} {...props} />
}
const BUTTON_HEIGHT = 42
export const PlaceholderButton: React.FC<ViewStyle> = ({ ...props }) => {
  return <PlaceholderBox height={BUTTON_HEIGHT} {...props} />
}

export class RandomNumberGenerator {
  constructor(private seed: number) {
    for (let i = 0; i < 100; i++) {
      this.seed = this.next()
    }
  }

  next(arg?: { from: number; to: number }) {
    const y = Math.sin(this.seed++) * 10000
    const result = y - Math.floor(y)
    if (arg) {
      return Math.min(arg.from, arg.to) + result * Math.abs(arg.to - arg.from)
    }
    return result
  }
}

export const PlaceholderRaggedText: React.FC<{ numLines: number; seed?: number }> = ({ numLines, seed = 10 }) => {
  const lengths = useMemo(() => {
    // create our own little deterministic math.random() to avoid snapshot churn
    const rng = new RandomNumberGenerator(seed)

    const result = []
    for (let i = 0; i < numLines - 1; i++) {
      result.push(rng.next() * 0.15 + 0.85)
    }
    result.push(rng.next() * 0.3 + 0.2)
    return result
  }, [numLines])

  return (
    <View style={{ justifyContent: "flex-start" }}>
      {lengths.map((length, key) => (
        <View key={key} style={{ flexDirection: "row" }}>
          <PlaceholderText flex={length}></PlaceholderText>
        </View>
      ))}
    </View>
  )
}

export const PlaceholderImage: React.FC<{ height: number }> = ({ height }) => {
  return (
    <View>
      <PlaceholderBox height={height} />
      <View style={{ marginBottom: 20 }} />
      <PlaceholderRaggedText numLines={2} seed={height} />
      <View style={{ marginBottom: 20 }} />
    </View>
  )
}

export const PlaceholderGrid: React.FC = () => {
  return (
    <Flex mx="2" flexDirection="row">
      <GenericGridPlaceholder width={useScreenDimensions().width - 40} />
    </Flex>
  )
}
