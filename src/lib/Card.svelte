<script lang="ts">
  
  import images_fun from '$lib/images/griffin-lady.jpg'
  import book_image from '$lib/images/wizard_smoke.jpg'
  import magician from '$lib/images/eyes-cube.jpg'
  import overcool from '$lib/images/pyr.jpg'
  import perfect from '$lib/images/forest_mountain.jpg'
  import images_don from '$lib/images/forest_spring.jpg'
	import type { Card } from '../app';

  let images: Array<string> = [
    images_fun,
    book_image,
    magician,
    overcool,
    perfect,
    images_don
  ];


  let cards : Card[] =[]; 
  let usedImages = new Set<string>();

  const addCard = ((cardName: string, imageIndex: number) => {

    while(imageIndex < images.length && usedImages.has(images[imageIndex])){
      imageIndex++;
    }

    if(imageIndex < images.length){
      const newCard: Card = {
        card_id: String(cards.length),
        card_name: cardName,
        card_image_src: images[imageIndex]
      };

      cards.push(newCard);
      usedImages.add(images[imageIndex]);
    }

  });
  addCard("Card1", 0);
  addCard("Card2", 1);
  addCard("Card2", 2);
  addCard("Card2", 3);
  addCard("Card2", 4);
  addCard("Card2", 5);
  addCard("Card2", 6);
  addCard("Card2", 7);
  addCard("Card2", 8);
  addCard("Card2", 9);
  addCard("Card2", 10);

</script>

{#each cards as card }
<div class="card_container">

    <div class="card_header">

        <picture class="pic">

          <img src="{card.card_image_src}" alt="{card.card_name}">
  
        </picture>
    </div>
    <div class="container">
      <slot/>
    </div>
</div>
{/each}

