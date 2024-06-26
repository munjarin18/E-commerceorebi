
import React, { useContext, useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { apiData } from '../components/ContextApi'
import Post from '../components/pagination/Post';
import PaginationArea from '../components/pagination/PaginationArea';



const Product = () => {
  let data = useContext(apiData)
  let [currentPage, setCurrentPage] = useState(1)
  let [perPage, setPerPage] = useState(6)
  let lastPage = currentPage * perPage
  let firstPage = lastPage - perPage

  let allData = data.slice(firstPage, lastPage)

  let pageNumber = []

  for (let i = 0; i < Math.ceil(data.length / perPage); i++) {
    pageNumber.push(i)
  }

   let paginate = (pageNumber) =>{
    setCurrentPage(pageNumber + 1);
   }  

  return (
    <section>
      <Container>
        <Flex>
          <div className="w-[20%]">
            category
          </div>
          <div className="w-[80%]">
            <div className="flex justify-between flex-wrap">

              <Post allData={allData} />

            </div>
            <div className=" text-end">

              <PaginationArea pageNumber={pageNumber} paginate={paginate} currentPage={currentPage} />

            </div>
          </div>
        </Flex>
      </Container>

    </section>
  )
}

export default Product