import React from 'react'

const Categories = () => {
  return (
    <>
       <h1 style={{textAlign : 'center',paddingTop:"100px"}}>Categories</h1>
		<div className="full-gallery">
			<div className="image-gallery">
				<div className="gallery-items">
					<div className="item">
						<img src="https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/dijon_mustard_roast_23740_16x9.jpg" />
						<div className="item-title">
							<div className="transparent-back"></div>
							<div className="title-text"><p>Chicken</p><p>Chicken</p></div>
						</div>
					</div>
				</div>
				<div className="gallery-items">
					<div className="item">
						<img src="https://ohsweetbasil.com/wp-content/uploads/the-easiest-korean-ground-beef-recipe-8-770x1155.jpg" />
						<div className="item-title">
							<div className="transparent-back"></div>
							<div className="title-text"><p>Beef</p><p>Beef</p></div>
						</div>
					</div>
				</div>
				<div className="gallery-items">
					<div className="item">
						<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Plateau_van_zeevruchten.jpg/250px-Plateau_van_zeevruchten.jpg" />
						<div className="item-title">
							<div className="transparent-back"></div>
							<div className="title-text"><p>Seafood</p><p>Seafood</p></div>
						</div>
					</div>
				</div>
				<div className="gallery-items">
					<div className="item">
						<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Desserts.jpg/500px-Desserts.jpg" />
						<div className="item-title">
							<div className="transparent-back"></div>
							<div className="title-text"><p>Desserts</p><p>Desserts</p></div>
						</div>
					</div>
				</div>
				
			</div>
		</div>
   
    </>
  )
}

export default Categories
