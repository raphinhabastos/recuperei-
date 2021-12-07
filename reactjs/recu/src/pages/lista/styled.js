import styled from 'styled-components'

const Container = styled.div`
    

    



    thead {
        background-color: black;
    }

    table {
        margin-top: 2em;
    }


    tbody {
        background-color: #F5F5F5;
    }

    td {
        text-align: left;
        height:  61.93px;
        padding: 1em;
        color: #6D6868;
        font-weight: 600;
    }

    th {
        height: 61.93px;
        text-align: left;
        padding: 1em;
        color: #ffff;
        font-weight: 800;
    } 
    
    .table-user {
        border-collapse: collapse;
    }

    .linha-alternada {
        background-color: #fff;
    }

    .coluna-acao {
        width: .1em;
    }

    .coluna-acao > button{
        visibility: hidden;
    }

    tr:hover{
        .coluna-acao > button{
            visibility: visible;
        }
    }

    button {
        cursor: pointer;
    }

   

    img {
        cursor: pointer;
    }


`

const Conteudo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export { Container, Conteudo }