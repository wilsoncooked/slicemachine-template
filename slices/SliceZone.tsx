import { ExampleSection } from "."

const SliceZone = ({ sliceZone }: any) =>
  sliceZone.map((slice: any, index: number) => {
    switch (slice.slice_type) {
      case "example_section":
        return <ExampleSection slice={slice} key={`slice-${index}`} />
      default:
        return null
    }
  })

export default SliceZone
