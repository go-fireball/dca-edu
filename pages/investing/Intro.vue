<template>
  <PageLayout
      title="Welcome to the World of Investing!"
      prev-link=""
      home-link="/investing/intro"
      next-link="/investing/introduction-to-investing">

    <template #content>
      <p>
        Imagine this: you are at a carnival, and you see two different rides. One is a fast, spinning
        rollercoaster that takes you on sharp turns and drops. It's thrilling but also makes you
        nervous—what if it doesn't end well? The other ride is slow, steady, and lets you enjoy the
        entire view of the carnival, gently rising higher and higher. You don't get that rush of
        adrenaline, but you feel safe knowing that you're going to have a smooth ride.
      </p>

      <v-container>
        <v-row justify="center" align="center" class="fill-height">
          <v-col cols="auto">
            <v-img
                src="/images/roller_coaster.jpeg"
                width="600px"
                alt="A roller coaster on a steep drop"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>

      <h2>Why Should You Learn About Investing?</h2>
      <p>
        You might be thinking, "Why should I even care about this? I'm just a kid." Well, learning
        about investing now can be one of the most important skills you'll ever gain! Think about your
        favorite video game. When you start a new game, you learn the rules, build your character, and
        figure out the best strategy to win. Investing is similar: the earlier you start learning the
        rules of money, the better you'll be at growing it in the future.
      </p>

      <p>
        Money is something you'll use every day when you're older, and it's super important to know
        how to make it work for you. Investing is one of the ways to do that. It's like planting a
        tree. If you plant it early, water it, and take care of it, over time it will grow big and
        strong. In the same way, money you invest wisely today will grow bigger by the time you're an
        adult!
      </p>

      <h2>The Secret of Long-Term Investing</h2>
      <p>
        Here's a secret many people don't know: the best way to grow your money is not by chasing
        after quick wins, but by being patient. Imagine your favorite superhero—maybe they train for
        years to develop their skills before they're ready to save the world. Investing is kind of
        like that. You don't need to be rich to start investing, and you don't need to make huge
        amounts of money fast. Instead, with long-term investing, you let time do the work for you.
      </p>

      <p>
        One of the best tricks for long-term investing is
        <strong>Dollar-Cost Averaging (DCA)</strong>. It sounds complicated, but it's simple. Imagine
        you save your pocket money every week and use it to buy small amounts of something you believe
        in—maybe stocks in your favorite company like Apple or Tesla. Over time, sometimes the price
        might go up or down, but because you keep investing the same amount regularly, you spread out
        your risk. This way, your money grows without you having to worry about timing the market
        perfectly.
      </p>

      <h2>How Can You Start?</h2>
      <p>
        Just like you wouldn't start a new game without knowing how to play, you need to learn the
        rules of investing before you jump in. That's where learning about stocks, mutual funds, and
        options comes in. Think of them like different weapons or tools in your game. Stocks are like
        owning a small piece of your favorite company. Mutual funds let you buy tiny pieces of many
        companies all at once, which spreads out the risk, kind of like using a shield. And options?
        They're a little more advanced, like special moves you can use to protect your money.
      </p>

      <h2>Ready for the Ride?</h2>
      <p>
        Remember that steady, safe ride we talked about at the carnival? That's the kind of ride you
        want when it comes to your money. By learning about long-term investing now, you're preparing
        yourself for a smooth journey towards a future where you control your money, and not the other
        way around.
      </p>

      <p>
        Stay tuned, because we'll talk more about how you can start investing, the types of
        investments you can make, and how to protect yourself with options. For now, keep your eyes on
        the horizon and think about the long-term game!
      </p>


    </template>
  </PageLayout>

</template>

<script setup lang="ts">
import PageLayout from '@/components/PageLayout.vue';
</script>
