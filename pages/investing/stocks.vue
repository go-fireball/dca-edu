<!-- investing/stocks.vue-->
<template>
  <PageLayout
      title="Stocks"
      prevLink="/investing/introduction-to-investing"
      homeLink="/investing/intro"
      nextLink="/investing/mutual-funds-and-etfs"
  >
    <template #content>

      <h2>What Are Stocks and How Do They Work?</h2>
      <p>
        Stocks are like pieces of a big puzzle. Each piece represents a small part of a company. When
        you buy a stock, you are buying a tiny piece of that company. This means you become a
        shareholder—someone who owns part of the business.
      </p>

      <p>
        Why do companies sell stocks? Imagine a company wants to grow, maybe by building more stores
        or creating a new product, but they need more money to do it. By selling stocks, they raise
        money from people like you, who buy small pieces of the company. In return, you hope the
        company will grow and become more successful, which would make your stock worth more.
      </p>

      <p>
        The stock market is where people buy and sell these pieces, called shares. When you own a
        share of a company, you share in its success or failure. If the company does well, the value
        of your stock can go up, and you might make money. But if the company doesn't do well, the
        stock price could go down, and you could lose money.
      </p>

      <iframe width="650" height="365" src="https://www.youtube.com/embed/2fLd4VQHKNg?si=yO3BgHiDidKFaPSf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      <h2>How to Choose Long-Term Stocks</h2>
      <p>
        Choosing good stocks to invest in for the long term is like picking a strong, healthy tree to
        plant in your garden. You want to find a company that has the potential to grow big and strong
        over time.
      </p>

      <p>Here are a few things to look for when choosing stocks:</p>

      <ul>
        <li>
          <strong>Strong Earnings</strong>: Companies that make more money (profits) than they spend
          are usually good choices.
        </li>
        <li>
          <strong>Consistent Growth</strong>: Look for companies that have been growing steadily over
          the years.
        </li>
        <li>
          <strong>Leadership and Vision</strong>: Great companies are led by smart people with a clear
          idea of where they want the company to go.
        </li>
      </ul>

      <p>
        The goal is to pick companies that you believe will continue to grow and succeed over many
        years. The longer they do well, the more your investment will grow.
      </p>

      <h2>Understanding Company Fundamentals</h2>
      <p>
        When investing in stocks, it's important to understand how well a company is doing. Just like
        you check the health of a plant by looking at its leaves and roots, you can check the health
        of a company by looking at its fundamentals.
      </p>

      <p>Here are a few key fundamentals you should know:</p>
      <ul>
        <li>
          <strong>Earnings</strong>: This is the money a company makes after paying all its expenses.
          If a company's earnings are growing, that's a good sign.
        </li>
        <li>
          <strong>Price-to-Earnings (P/E) Ratio</strong>: This compares the price of a stock to the
          company's earnings. A lower P/E ratio might mean the stock is cheaper compared to its
          earnings, while a high P/E ratio could mean the stock is more expensive.
        </li>
        <li>
          <strong>Revenue</strong>: This is the total amount of money the company brings in from
          selling its products or services.
        </li>
      </ul>
      <p>
        By looking at these fundamentals, you can get a better idea of whether a company is a good
        investment.
      </p>

      <h2>Dividend-Paying Stocks and Compounding Returns</h2>

      <p>
        Some companies not only grow in value but also pay a portion of their profits back to
        shareholders. These payments are called dividends. Dividends are like extra rewards for owning
        the company's stock.
      </p>

      <p>
        When you reinvest your dividends (meaning you use them to buy more stock), you start to
        experience compounding returns. Compounding returns happen when the money you make from your
        investments starts making its own money.
      </p>

      <p>
        For example, let's say you earn $10 in dividends from your stock this year, and you use that
        $10 to buy more stock. Next year, you'll not only earn dividends on your original investment
        but also on the new stock you bought with the $10. Over time, this cycle can make your
        investments grow even faster.
      </p>

      <h2>Diversifying Your Stock Portfolio</h2>

      <p>
        Diversification is a big word, but it simply means not putting all your eggs in one basket.
        When you invest, it's important to spread your money across different companies and
        industries. This way, if one company doesn't do well, you won't lose all your money.
      </p>

      <p>
        For example, imagine you own stocks in both a toy company and a food company. If the toy
        company doesn't sell as many toys one year, the food company might still be doing well, which
        helps protect your overall investment.
      </p>

      <p>
        By owning different types of stocks, you lower your risk and increase your chances of making
        steady returns over the long term.
      </p>
    </template>
  </PageLayout>

</template>

<script setup lang="ts">
import PageLayout from '@/components/PageLayout.vue';

useHead({
  title: 'Introduction to Stocks - What Are Stocks and How Do They Work?',
  meta: [
    {
      name: 'description',
      content: 'Learn about stocks, how they work, and how to invest in them for long-term growth. Understand stock fundamentals, dividends, and diversification to make informed investment decisions.'
    },
    {
      name: 'keywords',
      content: 'stocks, investing in stocks, stock fundamentals, stock market, dividends, long-term investment, stock diversification'
    }
  ]
});
</script>
