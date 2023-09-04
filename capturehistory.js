function captureOrderHistory(user) {
    const orders = getOrdersFromDatabase(user);
  
    const orderHistory = {};
  
    //Loop through the user's orders and add them to the order history object.
    for (const order of orders) {
      orderHistory[order.id] = order;
    }
    saveOrderHistoryToDatabase(orderHistory);
  }
  
  function captureWishlistHistory(user) {
    const wishlistItems = getWishlistItemsFromDatabase(user);
  
    const wishlistHistory = {};
  
    //Loop through the user's wishlist items and add them to the wishlist history object.
    for (const wishlistItem of wishlistItems) {
      wishlistHistory[wishlistItem.id] = wishlistItem;
    }

    saveWishlistHistoryToDatabase(wishlistHistory);
  }
  
  function captureRatingHistory(user) {
    const ratings = getRatingsFromDatabase(user);
  
    const ratingHistory = {};
  
    //Loop through the user's ratings and add them to the rating history object.
    for (const rating of ratings) {
      ratingHistory[rating.id] = rating;
    }
  
    saveRatingHistoryToDatabase(ratingHistory);
  }