import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import toast from 'react-hot-toast';

function Story({
  title="",
  image="",
  description="",
  name=sessionStorage.getItem('name'),
  likes=0,
  id="",
  likeUnlike=false,
  callback=()=>{}
  }) {
  return <Card style={{ width: '36rem', padding:"5px", margin:"5px"}}>
  <Card.Title>
      <div className='profile'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541' 
        width="40px" 
        height="40px" 
        className='profile-picture'/>

      <div>
        {name}
      </div>
    </div>
    
  </Card.Title>
  
  <Card.Img variant="top" src={image} alt='Blog Image' />
  
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
      {description}
    </Card.Text>
    <Card.Text>
      {likes} Likes
    </Card.Text>
    <Button variant={likeUnlike ? 'danger' : 'success'} onClick={()=>callback(id)}>{likeUnlike ? 'Unlike' : 'Like'}</Button>
  </Card.Body>

</Card>
}

export default Story