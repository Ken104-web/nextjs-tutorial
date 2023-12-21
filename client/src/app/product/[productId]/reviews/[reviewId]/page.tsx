export default function ReviewDetails({params} : {
    params : {productId: string; reviewId: string;}
}){
    return (
        <div>
            <h1>Review details {params.reviewId} for product {params.productId}</h1>
        </div>
    )
}