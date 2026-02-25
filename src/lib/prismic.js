import * as prismic from '@prismicio/client'

const getText = (value) => {
  if (Array.isArray(value)) {
    return value[0]?.text || ''
  }

  return value?.text || ''
}

const mapProject = (project) => {
  const data = project?.data || {}
  const slideshowSlice = (data.body || []).find(
    (slice) => slice.slice_type === 'slideshow' || slice.type === 'slideshow'
  )

  return {
    id: project.id,
    createdAt: project.first_publication_date,
    lang: project.lang,
    title: getText(data.title),
    year: getText(data.year),
    technologies: getText(data.technologies),
    thumbnail: {
      url: data.thumbnail?.url || '',
      alt: data.thumbnail?.alt || '',
    },
    slideshow: (slideshowSlice?.items || [])
      .map((item) => ({
        url: item?.image?.url || '',
        alt: item?.image?.alt || '',
      }))
      .filter((image) => image.url),
  }
}

export const getProjects = async () => {
  const repositoryName = import.meta.env.PRISMIC_REPOSITORY

  if (!repositoryName) {
    return []
  }

  const endpoint = `https://${repositoryName}.cdn.prismic.io/api/v2`
  const client = prismic.createClient(endpoint, {
    accessToken: import.meta.env.PRISMIC_ACCESS_TOKEN,
  })

  const projects = await client.getAllByType('project', { lang: '*' })
  return projects.map(mapProject)
}
