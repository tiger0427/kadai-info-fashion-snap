import Link from "./Link"
import { Button, Box } from "@material-ui/core"

export function PersonBottomBar() {
  return (
    <>
      <Box m={3} pt={1}>
        <Link href="/">
          <Button variant='outlined'>
            TOPに戻る
          </Button>
        </Link>
      </Box>
    </>
  )
}