function canBalance(nums){
    let addLeft = 0;
    let addRight = 0;
    for (let i=0; i < nums.length; i++){
        addLeft += nums[i];
        for (let j=i + 1; j < nums.length; j++){
        addRight += nums[j];
    }
    if (addLeft === addRight)
        return true;
  addRight = 0;
    
}
return false;

}