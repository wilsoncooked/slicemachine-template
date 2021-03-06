const url = require("url")

export default async function exit(req: any, res: any) {
  // Exit the current user from "Preview Mode". This function accepts no args.
  res.clearPreviewData()

  const queryObject = url.parse(req.url, true).query
  const redirectUrl =
    queryObject && queryObject.currentUrl ? queryObject.currentUrl : "/"

  res.writeHead(307, { Location: redirectUrl })
  res.end()
}
