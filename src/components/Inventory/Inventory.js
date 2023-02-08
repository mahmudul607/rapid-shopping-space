import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    LineChart,
    BarChart,
    Bar
  } from "recharts";
import Footer from "../Footer/Footer";

const ProductInventory = () => {


  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", stock: 10 },
    { id: 2, name: "Product 2", stock: 5 },
    { id: 3, name: "Product 3", stock: 20 },
    { id: 4, name: "Product 4", stock: 22 },
    { id: 5, name: "Product 5", stock: 29 },
    { id: 6, name: "Product 6", stock: 18 },
  ]);
 

 


  const handleStockUpdate = (id, updatedStock) => {
    setProducts(
      products.map(product =>
        product.id === id ? { ...product, stock: updatedStock } : product
      )
    );
  };

  return (
    <div>
      <h2>Product Inventory</h2>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Current Stock</th>
            <th>Update Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.stock}</td>
              <td>
                <input
                  type="number"
                  value={product.stock}
                  onChange={e => handleStockUpdate(product.id, e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Row>
      <Col className="" style={{width:'50%', height:'400px'}}>
      <AreaChart
      width={600}
      height={400}
      data={products}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="stock" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
      </Col>
      <Col className="" style={{width:'50%', height:'400px'}}>
      <BarChart width={600} height={400} data={products}>
      <Bar dataKey="stock" fill="#8884d8" />
    </BarChart>
      </Col>

      </Row>
      
      
        
      
 
    </div>
  );
};

const Inventory = () => (
  <div>
    <ProductInventory />
    <Footer></Footer>
  </div>
);

export default Inventory;