export default function PreviewBanner({
  previewUrl,
  dataId
}: {
  previewUrl?: string
  dataId?: string
}) {
  const preview =
    previewUrl && dataId
      ? `http://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/preview?token=${previewUrl}&documentId=${dataId}`
      : null

  const copy = async () => {
    await navigator.clipboard.writeText(preview || "")
    alert(`${preview} copied to clipboard`)
  }
  return (
    <div className={`fixed  right-0 bottom-0`} style={{ zIndex: 100 }}>
      <div className="bg-indigo-700 pt-4 pb-1 px-4 md:px-8 m-4 flex flex-col items-center border border-rose">
        <p className="text-white">This page is a preview</p>
        <div className="flex gap-6 my-2">
          {preview && (
            <>
              <a onClick={copy} className="text-white underline cursor-pointer">
                Copy preview url
              </a>
            </>
          )}

          <a
            href={`http://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/exit-preview`}
            className="text-white underline cursor-pointer"
          >
            Exit
          </a>
        </div>
      </div>
    </div>
  )
}
