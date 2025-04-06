import React, { useState, useRef } from 'react';
import { Stage, Layer, Image, Text } from 'react-konva';
import { useParams } from 'react-router-dom';
import useImage from 'use-image';

import Layout from '../components/Layout/Layout';

const URLImage = ({ src, ...rest }) => {
  const [image] = useImage(src, 'anonymous');
  return <Image image={image} width={500} height={500} {...rest} />;
};

const CustomizeProduct = () => {
  const { customize } = useParams();
  const [textProps, setTextProps] = useState({
    x: 50,
    y: 100,
    text: 'Your Text Here',
    fontSize: 40,
    fill: 'black',
    draggable: true,
  });

  return (
    <Layout>
      <div style={{ display: 'flex', flexWrap: 'wrap', padding: '2rem', justifyContent: 'center' }}  className="product-details">
        
       
        <div
          style={{
            border: '2px solid #ccc',
            borderRadius: '10px',
            padding: '10px',
            marginBottom: '20px',
            background: '#f9f9f9',
          }}
        >
          <Stage width={500} height={500}>
            <Layer>
              <URLImage src={`/api/v1/product/product-photo/${customize}`} x={0} y={0} />
              <Text
                {...textProps}
                onClick={() => console.log('text clicked')}
                onDragEnd={(e) =>
                  setTextProps({ ...textProps, x: e.target.x(), y: e.target.y() })
                }
              />
            </Layer>
          </Stage>
        </div>

        
        <div
          style={{
            marginLeft: '2rem',
            padding: '1rem',
            background: '#ffffff',
            borderRadius: '10px',
            border: '1px solid #ddd',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            maxWidth: '300px',
            width: '100%',
          }}
        >
          <h3 style={{ marginBottom: '1rem', color: '#333' }}>Customize Text</h3>

       
          <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>
            Enter Text:
          </label>
          <input
            type="text"
            value={textProps.text}
            onChange={(e) => setTextProps({ ...textProps, text: e.target.value })}
            style={{
              width: '100%',
              padding: '8px',
              marginBottom: '15px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />

        
          <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>
            Text Color:
          </label>
          <input
            type="color"
            value={textProps.fill}
            onChange={(e) => setTextProps({ ...textProps, fill: e.target.value })}
            style={{ width: '100%', marginBottom: '15px', height: '40px' }}
          />

          <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>
            Font Size: {textProps.fontSize}
          </label>
          <input
            type="range"
            min="10"
            max="100"
            value={textProps.fontSize}
            onChange={(e) =>
              setTextProps({ ...textProps, fontSize: parseInt(e.target.value) })
            }
            style={{ width: '100%' }}
          />
          <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>
            Save the changes 
          </label>
          <button style={{backgroundColor:"#1B415F", color:"white"}}>
            Save Changes
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default CustomizeProduct;
