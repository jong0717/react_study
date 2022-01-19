/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'
const color = 'white'
const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`
const style = css`
  color: hotpink;
`

const SomeComponent = ({ children }) => (
  <div css={style}>
    Some hotpink text.
    {children}
  </div>
)

const anotherStyle = css({
  textDecoration: 'underline'
})

const AnotherComponent = () => (
  <div css={[anotherStyle, style]}>Some text with an underline.</div>
)
const danger = css`
  color: red;
`

const base = css`
  background-color: yellow;
  color: turquoise;
`
export default function EmotionExample() {
    return (
        <>
            {/* <div
            css={css`
            padding: 32px;
            background-color: hotpink;
            font-size: 24px;
            border-radius: 4px;
            &:hover {
                color: ${color};
            }
            `}
        >
            Hover to change color.
        </div>
        <Button>Button</Button>
        <SomeComponent>
        </SomeComponent>
        <AnotherComponent /> */}
        <div css={base}>This will be turquoise</div>
    <div css={[danger, base]}>
      This will be also be turquoise since the base styles
      overwrite the danger styles.
    </div>
    <div css={[base, danger]}>This will be red</div>
        </>
    )
}
