var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Fmaily Book","Shree Jitendra Sain Gupta=Grandpa", "Deepak Jindal=Dad", "Tejas Jindal=Brother", "Varsha Jindal=Mom", "Shrimati Snehlata jain gupta=Grandma", "Yash Jindal=Me"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    
   
     
    var updatedName = names[i];
    document.getElementById("family_member_name").innerHTML = updatedName;
    document.getElementById("Shree Jitendra Sain Gupta=Grandpa").innerHTML = updatedName; 
    document.getElementById("Deepak Jindal=Dad").innerHTML = updatedName;
    document.getElementById("Tejas Jindal=Brother").innerHTML = updatedName;
    document.getElementById("Varsha Jindal=Mom").innerHTML = updatedName;
    document.getElementById("Shrimati Snehlata jain gupta=Grandma").innerHTML = updatedName;
    document.getElementById("Yash Jindal=Me").innerHTML = updatedName;
     

    
    var updatedImage = images[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("https://tse3.mm.bing.net/th?id=OIP.J3Lt1lLFNMF18zhuMANKYgHaIt&pid=Api&P=0&w=143&h=169").src = updatedImage;
    document.getElementById("https://tse4.mm.bing.net/th?id=OIP.yAbAN_FUSBYwZXkb-HJBjQHaNk&pid=Api&P=0&w=95&h=174").src = updatedImage;
    document.getElementById("https://cdn.shopify.com/s/files/1/2068/3659/files/FatherTimeBread_FelixBust.png?v=1510449596").src = updatedImage;
    document.getElementById("https://tse4.mm.bing.net/th?id=OIP.LQx8DzZoPjhzpiOm-sSfgwHaH8&pid=Api&P=0&w=168&h=180").src = updatedImage;
    document.getElementById("https://image.shutterstock.com/image-vector/working-mom-260nw-158801603.jpg").src = updatedImage;
    document.getElementById("https://png.pngtree.com/element_origin_min_pic/16/09/07/2057d007f1634bf.jpg").src = updatedImage;
    document.getElementById("https://wallpapercave.com/wp/wp6159838.jpg").src=updatedImage;
    }
