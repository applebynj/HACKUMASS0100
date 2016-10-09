//var stack = gajus.Swing.Stack();

document.addEventListener('DOMContentLoaded', function () {
    var stack;

    stack = gajus.Swing.Stack();

    [].forEach.call(document.querySelectorAll('.stack li'), function (targetElement) {
        stack.createCard(targetElement);
        targetElement.classList.add('in-deck');
    });

    stack.on('throwout', function (e) {
        console.log(e.target.innerText || e.target.textContent, 'has been thrown out of the stack to the', e.throwDirection == 1 ? 'right' : 'left', 'direction.');

        //right = 1, left =... not 1?
        //(cardClass == "cu" && e.throwDirection == 1) ? e.target.style.borderColor = "green": (cardClass = "co" && e.throwDirection != 1) ? e.target.style.borderColor = "green":  e.target.style.borderColor = "red";
        var cardClass = e.target.className;

        if((cardClass == "cu") && (e.throwDirection == 1)) {
          e.target.style.borderColor = "green";
          console.log("1");
        } else if((cardClass == "co") && (e.throwDirection == -1)) {
            e.target.style.borderColor = "green";
            console.log("2 " + cardClass);
          }
          else {
          e.target.style.borderColor = "red";
          console.log("3 " + cardClass);
        }

        // e.target.innerHTML = "<div style=\"background-color:green\">" + e.target.innerHTML + "</div>"
        //                                               : (cardClass == "co") ? e.target.innerHTML = "<div style=\"background-color:green\">" + e.target.innerHTML + "</div>"
        //                                                                                             : e.target.innerHTML = "<div style=\"background-color:red\">" + e.target.innerHTML + "</div>"

        console.log(e.target.id);

        e.target.classList.remove('in-deck');
    });

    stack.on('throwin', function (e) {
        console.log(e.target.innerText || e.target.textContent, 'has been thrown into the stack from the', e.throwDirection == 1 ? 'right' : 'left', 'direction.');

        e.target.classList.add('in-deck');
    });

    //SHUFFLE elements of list
    var ul = document.getElementById("deck");
    for (var i = ul.children.length; i >= 0; i--) {
      ul.appendChild(ul.children[Math.random() * i | 0]);
    }
});
