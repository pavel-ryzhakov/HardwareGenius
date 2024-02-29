<p align="center">
      <img src="https://github.com/pavel-ryzhakov/HardwareGenius/blob/master/HardwareGenius-SPA/hw-genius/src/assets/images/logos/logo.png?raw=true" width="500">
</p>

<p align="center">
      <img src="https://img.shields.io/badge/-Avocadoz-000000?logo=overleaf" alt="License">
      <img src="https://img.shields.io/badge/-React 18.0-5b5b5b?logo=react" alt="License">
      <img src="https://img.shields.io/badge/-7.0-512BD4?logo=dotnet" alt="License">
      <img src="https://img.shields.io/badge/-2022-5C2D91?logo=visualstudio" alt="sa">
      <img src="https://img.shields.io/badge/-Sass-5C2D91?logo=sass" alt="sa">
      <img src="https://img.shields.io/npm/v/npm.svg?logo=nodedotjs" alt="sa"> 
</p>

## About

🌐 Web configurator for building a gaming PC with testing.
## Documentation
ERD:

```mermaid
erDiagram
    products{
        int product_id PK
        int category_id FK
        int manufacturer_id FK
        text model
        money price
        text picture
    }    

    manufacturers{
        int manufacturer_id PK
        text manufacturer_name
    }

    categories{
        int category_id PK
        text category_name
    }

    attributes{
        int attribute_id PK
        int category_id FK
        text attribute_name
        
    }
    attribute_values{
        int attribute_value_id PK
        int attribute_id FK
        int product_id FK
        type value
    }
    user{
        UUID user_id PK
        text user_name
        text email
        text first_name
        text last_name
        text phone_number
        date registration_data
    }
    adress{
       UUID adress_id PK
       int user_id FK
       text country
       text city
       text street
       text home
       int post_index
    }
    
    cart{
        UUID cart_id PK
        int user_id FK
        timestamp date
    }
    cart_items{
        UUID cart_item_id PK
        int cart_id FK
        int product_id FK
        int product_count
    }
    orders{
        UUID order_id PK
        int user_id FK
        text pay_select
        int address_id FK
        int billing_address_id FK
        text order_state
        timestamp order_date
        money order_price
    }
    order_items{
        UUID order_item_id PK
        int order_id FK
        int product_id FK
        int country
        int price_at_purchase
    }

products ||--|{ attribute_values : ""
products }|--|| manufacturers : ""
categories ||--|{ attributes : ""
products }|--|| categories : ""
attributes ||--|{ attribute_values : ""
cart_items }|--|| products : ""
cart_items }|--|| cart : ""
cart }|--|| user : ""
adress }|--|| user : ""
orders }|--|| user : ""
orders }|--|| adress : ""
cart_items }|--|| orders : ""
cart_items }|--|| products : ""
```
    
## External resources
<details>
      <summary><b>NPM</b></summary>
      <p>
    <ul>
        <li>ReactiveSearch [npm install @appbaseio/reactivesearch]</li>
        <li>Font Awesome [npm i --save @fortawesome/fontawesome-svg-core]</li>            
    </ul>
</details>

<details>
      <summary><b>NuGet</b></summary>
      <p>
    <ul>
          <li>Entity Framework Core</li>
          <li>Npgsql.EntityFrameworkCore.PostgreSQL</li>
          <li>Serilog</li>
          <li>AutoMapper</li>
    </ul>
</details>


## Developers

- [Ryzhakov](https://github.com/pavel-ryzhakov)
- [Fenix](https://github.com/Fenix-NET)

## License
