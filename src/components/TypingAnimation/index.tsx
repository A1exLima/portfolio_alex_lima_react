import { useState, useEffect } from 'react'

interface TypingAnimationProps {
  text: string
}

export function TypingAnimation({ text }: TypingAnimationProps) {
  const [finalText, setFinalText] = useState('')
  const [showCursor, setShowCursor] = useState(false)

  useEffect(() => {
    const delayStart = setTimeout(() => {
      let newText = ''

      const typeText = async () => {
        for (let i = 0; i <= text.length; i++) {
          newText = text.substring(0, i)
          setFinalText(newText)

          await new Promise((resolve) => setTimeout(resolve, 30))
        }
      }

      typeText()

      const blinkCursor = setInterval(() => {
        setShowCursor((prev) => !prev)
      }, 500)

      return () => {
        setFinalText('')
        clearInterval(blinkCursor)
      }
    }, 600)

    return () => clearTimeout(delayStart)
  }, [text])

  const cursorStyle = {
    opacity: showCursor ? 1 : 0,
  }

  return (
    <p>
      {finalText}
      <span style={cursorStyle}> |</span>
    </p>
  )
}
