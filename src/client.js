import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: "y34bz56o",
    dataset: "production",
    useCdn: true,
})