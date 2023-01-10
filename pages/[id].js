import React from 'react'

export async function getServerSideProps(context) {
    const id = context.params.id
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id)
    const data = await res.json()
    return {
      props: {
        data
      }, // will be passed to the page component as props
    }
  }

const detailsPage = ({data}) => {
  return (
    <div>{data.title}</div>
  )
}

export default detailsPage