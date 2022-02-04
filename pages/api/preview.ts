import { linkResolver } from "../../utils/prismicConfiguration" // import from wherever this is set
import { Client } from "../../utils/prismicHelpers" // import from wherever this is set

export const preview = async (req: any, res: any) => {
  const { token: ref, documentId } = req.query
  const redirectUrl = await Client(req)
    .getPreviewResolver(ref, documentId)
    .resolve(linkResolver, "/")
  if (!redirectUrl) {
    return res.status(401).json({ message: "Invalid token" })
  }

  res.setPreviewData({ ref })

  res.write(
    `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${redirectUrl}" />
    <script>window.location.href = '${redirectUrl}'</script>
    </head>`
  )
  res.end()
}

export default preview
