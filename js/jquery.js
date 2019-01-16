$(document).ready(function(){

var myNavBar = {

    flagAdd: true,

    elements: [],

    init: function (elements) {
        this.elements = elements;
    },

    add : function() {
        if(this.flagAdd) {
            for(var i=0; i < this.elements.length; i++) {
                document.getElementById(this.elements[i]).className += " fixed-theme";
            }
            this.flagAdd = false;
        }
    },

    remove: function() {
        for(var i=0; i < this.elements.length; i++) {
            document.getElementById(this.elements[i]).className =
                    document.getElementById(this.elements[i]).className.replace( /(?:^|\s)fixed-theme(?!\S)/g , '' );
        }
        this.flagAdd = true;
    }

};

/*
  Init the object. Pass the object the array of elements
  that we want to change when the scroll goes down
 */
myNavBar.init(  [
    "header",
    "header-container",
    "brand"
]);

/*
  Function that manage the direction
  of the scroll
 */
function offSetManager(){

    var yOffset = 0;
    var currYOffSet = window.pageYOffset;

    if(yOffset < currYOffSet) {
        myNavBar.add();
    }
    else if(currYOffSet == yOffset){
        myNavBar.remove();
    }

}

/*
  bind to the document scroll detection
 */
window.onscroll = function(e) {
    offSetManager();
}

/*
  We have to do a first detectation of offset because the page
  could be load with scroll down set.
 */
offSetManager();

$("#submit").click(function(){
  var name = $("#name").val();
  var email = $("#email").val();
  var message = $("#message").val();
  var contact = $("#contact").val();

  $("#returnmessage").empty(); //To empty previous error/success message.
//checking for blank fields 
if(name==''||email==''||contact=='')
{
   alert("Please Fill Required Fields"); 
}
else{
// Returns successful data submission message when the entered information is stored in database.
$.post("contact_form.php",{ name1: name, email1: email, message1:message, contact1: contact},
   function(data) {
                $("#returnmessage").append(data);//Append returned message to message paragraph
          if(data=="Your Query has been received, We will contact you soon."){
            $("#form")[0].reset();//To reset form fields on success
          }
      });
         }
 
  });

});


/*

    <!-- Navigation -->
<nav id="mainNav" class="navbar navbar-default navbar-custom navbar-fixed-top">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span> Menu <i class="fa fa-bars"></i>
                </button>
                <a class="navbar-brand page-scroll" href="#page-top">PetBnB</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li class="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li>
                        <a class="page-scroll" href="index.html">Home</a>
                    </li>
                    <li>
                        <a class="page-scroll" href="hosts.html">Hosts</a>
                    </li>
                    <li>
                        <a class="page-scroll" href="signup.html">Sign Up</a>
                    </li>
                    <li>
                        <a class="page-scroll" href="signin.html">Sign in</a>
                    </li>
                    <li>
                        <a class="page-scroll" href="contact.html">Contact</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </nav>

    .navbar-custom {
  background-color: #222222;
  border-color: transparent;
}

.navbar-custom .navbar-brand {
  color: #fed136;
  font-family: "Kaushan Script", "Helvetica Neue", Helvetica, Arial, cursive;
}

.navbar-custom .navbar-brand:hover,
.navbar-custom .navbar-brand:focus,
.navbar-custom .navbar-brand:active,
.navbar-custom .navbar-brand.active {
  color: #fec503;
}

.navbar-custom .navbar-collapse {
  border-color: rgba(255, 255, 255, 0.02);
}

.navbar-custom .navbar-toggle {
  background-color: #fed136;
  border-color: #fed136;
  font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-transform: uppercase;
  color: white;
  font-size: 12px;
}

.navbar-custom .navbar-toggle:hover,
.navbar-custom .navbar-toggle:focus {
  background-color: #fed136;
}

.navbar-custom .nav li a {
  font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 1px;
  color: white;
}

.navbar-custom .nav li a:hover,
.navbar-custom .nav li a:focus {
  color: #fed136;
  outline: none;
}

.navbar-custom .navbar-nav > .active > a {
  border-radius: 0;
  color: white;
  background-color: #fed136;
}

.navbar-custom .navbar-nav > .active > a:hover,
.navbar-custom .navbar-nav > .active > a:focus {
  color: white;
  background-color: #fec503;
}

@media (min-width: 768px) {
  .navbar-custom {
    background-color: transparent;
    padding: 25px 0;
    -webkit-transition: padding 0.3s;
    -moz-transition: padding 0.3s;
    transition: padding 0.3s;
    border: none;
  }

  .navbar-custom .navbar-brand {
    font-size: 2em;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
  }

  .navbar-custom .navbar-nav > .active > a {
    border-radius: 3px;
  }
}
@media (min-width: 768px) {
  .navbar-custom.affix {
    background-color: #222222;
    padding: 10px 0;
  }

  .navbar-custom.affix .navbar-brand {
    font-size: 1.5em;
  }
}
*/