import { Footer, Header, PreviewBanner } from "../components"

type Props = {
  children: React.ReactNode
  previewRef?: string
  previewUrl?: string
  dataId?: string
}

export default function Layout({
  children,
  previewRef,
  previewUrl,
  dataId
}: Props) {
  return (
    <div>
      <Header />
      {previewRef && <PreviewBanner previewUrl={previewUrl} dataId={dataId} />}
      <main>{children}</main>
      <Footer />
    </div>
  )
}
