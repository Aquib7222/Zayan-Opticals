import "./Shop_SideBar.css";
import Burbery_Image from "../images/Burbery_Image.jpg";
function Shop_SideBar() {
  return (
    <>
      <div class="row mt-4">
        <div class="col-3">
          <div id="list-example" class="list-group">
            <a
              class="list-group-item list-group-item-action"
              href="#list-item-1"
            >
              Item 1
            </a>
            <a
              class="list-group-item list-group-item-action"
              href="#list-item-2"
            >
              Item 2
            </a>
            <a
              class="list-group-item list-group-item-action"
              href="#list-item-3"
            >
              Item 3
            </a>
            <a
              class="list-group-item list-group-item-action"
              href="#list-item-4"
            >
              Item 4
            </a>
          </div>
        </div>
        <div class="col-8">
          <div
            data-bs-spy="scroll"
            data-bs-target="#list-example"
            data-bs-smooth-scroll="true"
            class="scrollspy-example"
            tabindex="0"
          >
            <h4 id="list-item-1">Item 1</h4>
            <div class="card" >
  <img src={Burbery_Image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
            <h4 id="list-item-2">Item 2</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, debitis quisquam! Autem id, nihil cumque eius
              doloremque vel sequi? Expedita possimus provident accusantium
              debitis magnam eveniet ea quibusdam pariatur officia. Delectus
              beatae amet impedit natus ipsa dolorem veritatis, explicabo at
              omnis asperiores, doloribus aut, reprehenderit ea? Rerum, esse,
              corrupti tempore molestias nobis quas quia nemo possimus illo
              voluptas laborum quae. Accusamus totam iusto corporis aliquid
              optio earum dolorum officia quo magnam, assumenda, consequatur cum
              voluptatum illum aut tempora, nam vitae harum deserunt dolores!
              Ratione est, enim nobis minima necessitatibus quo.
            </p>
            <h4 id="list-item-3">Item 3</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur voluptates incidunt obcaecati doloremque consequatur
              magni beatae consectetur odio dolorum, inventore fugit qui iste
              quas. Placeat deleniti iusto alias modi dignissimos? Quisquam
              sapiente, reiciendis optio voluptatibus velit asperiores nam sequi
              perferendis numquam, quibusdam facilis minima laboriosam labore
              dolor aliquam nostrum sint ex officiis atque explicabo culpa, eos
              eligendi consequatur saepe. Est. Natus, ducimus repellendus,
              impedit voluptatibus dolorum, officiis nobis illum autem vero
              explicabo ipsa porro reprehenderit eligendi veniam quos similique.
              Nulla obcaecati atque numquam dignissimos repellat enim
              reprehenderit quaerat inventore assumenda. Impedit eum voluptas
              molestias iusto quis iure laboriosam commodi tempora nemo illum.
              Atque ab possimus laboriosam molestias ducimus facere aliquid ipsa
              et, veniam est placeat maiores, eveniet culpa similique magni.
            </p>
            <h4 id="list-item-4">Item 4</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
              rerum quo, repellat dolores rem unde labore! Iusto eveniet
              necessitatibus quaerat doloremque suscipit nemo facere velit in
              nesciunt, laudantium obcaecati quam! Inventore expedita aliquam et
              modi soluta velit eligendi quam, consequuntur optio quidem iure
              quasi deleniti at in amet nisi totam illum earum, itaque sunt
              voluptate similique sapiente? Eos, qui enim? Earum sint
              consequatur est reiciendis, neque doloribus magni sed harum nobis
              voluptates beatae non architecto ipsum quos expedita maiores
              dignissimos dolorem corrupti totam veritatis ad vero laudantium
              sunt. Maiores, consequuntur. Id laborum, eum dolorum asperiores
              voluptas sunt harum magnam consectetur nulla temporibus saepe qui
              molestiae totam illo facilis odio! Eligendi tenetur iste earum
              maxime esse veniam dolores, nemo perferendis! Deserunt? Nostrum
              neque dolor ab iusto provident quod, maxime iure libero voluptate
              dolore nihil aliquam, obcaecati deleniti esse dolorum vel atque
              quae itaque, illum earum odit recusandae! Officia quae
              consequuntur eligendi!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Shop_SideBar;
