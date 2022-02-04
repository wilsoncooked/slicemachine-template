import type { NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import Layout from "../layout"
import SliceZone from "../slices/SliceZone"
import Client from "../utils/prismicHelpers"

const Home: NextPage = ({ data, previewRef, previewUrl }: any) => {
  const router = useRouter()

  if (router.isFallback) {
    return <h2>Loading</h2>
  }

  console.log(data)

  if (!data.id) {
    return <h2>Error!</h2>
  }

  if (data) {
    return (
      <Layout previewRef={previewRef} previewUrl={previewUrl} dataId={data.id}>
        {data.data.slices && <SliceZone sliceZone={data.data.slices} />}
      </Layout>
    )
  } else {
    return <></>
  }
}

export async function getStaticProps({ params, previewData }: any) {
  const previewRef = previewData ? previewData.ref : null
  const refOption = previewRef ? { ref: previewRef } : null
  const data =
    (await Client().getByUID("home", "home", {
      ...refOption,
      fetchLinks: []
    })) || {}

  return {
    props: {
      previewRef,
      data,
      previewUrl: previewData ? previewData.ref : null
    }
  }
}

export default Home
