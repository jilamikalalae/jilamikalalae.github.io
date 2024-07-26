import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';


const DataTable = ({ data, onDelete, onSearch, onSort }) => {
    const sRef = React.useRef();


    const handleSearch = () => {
        const keyword = sRef.current.value
        onSearch(keyword)

    }


    return (
        <Container>
            <input type="text" placeholder="Search..." ref={sRef} />{' '}
            <Button onClick={handleSearch} variant='outline-dark'>
                <i className='bi bi-search'></i>
                Search</Button>
            
            <span>Sort</span>
            
            <Button variant='outline-dark' ><i class="bi bi-arrow-down"  onClick={() => onSort("dsc")}></i></Button>
            <Button variant='outline-dark' ><i class="bi bi-arrow-up" onClick={() => onSort("asc")}></i></Button>
            
            <Table variant='dark'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>
                                <i className="bi bi-trash" onClick={() => onDelete(index)}></i>
                            </td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>


    );
};

export default DataTable;