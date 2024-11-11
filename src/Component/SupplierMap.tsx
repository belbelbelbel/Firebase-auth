import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const suppliers = [
    { id: 1, name: 'Supplier A', coords: [6.5244, 3.3792], product: 'Product 1' },
    { id: 2, name: 'Supplier B', coords: [9.0765, 7.3986], product: 'Product 2' }, 
    { id: 3, name: 'Supplier C', coords: [10.5105, 7.4165], product: 'Product 3' }, 
    { id: 4, name: 'Supplier C', coords: [10.5105, 7.4165], product: 'Product 3' }, 
    { id: 5, name: 'Supplier C', coords: [15.5105, 7.4165], product: 'Product 4' }, 
    { id: 6, name: 'Supplier C', coords: [23.5105, 7.4165], product: 'Product 5' }, 
];

const SupplierMap = () => {
    const [selectedProduct, setSelectedProduct] = useState('');

    const filteredSuppliers = suppliers.filter(supplier =>
        selectedProduct ? supplier.product === selectedProduct : true
    );

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ width: '300px', padding: '20px' }}>
                <h2>Filter Suppliers</h2>
                <label>
                    Product:
                    <select onChange={e => setSelectedProduct(e.target.value)} value={selectedProduct}>
                        <option value="">All Products</option>
                        <option value="Product 1">Product 1</option>
                        <option value="Product 2">Product 2</option>
                        <option value="Product 3">Product 3</option>
                    </select>
                </label>
            </div>

            <MapContainer
                style={{ height: '600px', width: '100%' }}
                center={[9.0820, 8.6753]} 
                zoom={4}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; OpenStreetMap contributors"
                />

                {filteredSuppliers.map(supplier => (
                    <Marker key={supplier.id} position={supplier.coords}>
                        <Popup>
                            <strong>{supplier.name}</strong>
                            <p>Product: {supplier.product}</p>
                            <button>View Details</button>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default SupplierMap;
