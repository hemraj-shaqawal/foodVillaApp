const filterData = () => {
    if(searchInput === '') {
        return actualRestroList
    }
    return restroList.filter(item => item.data.name.toLowerCase().includes(searchInput.toLowerCase()));
}


export default {filterData}