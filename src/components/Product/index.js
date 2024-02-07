import * as S from "./styles";

import mockImage from "../../images/iphone-13-produto-2-700x700.webp";

export const Product = () => {
  return (
    <S.ProductContainer>
      <S.ProductImageContainer>
        <S.ProductImage src={mockImage} />
      </S.ProductImageContainer>
      <div>Testes</div>
    </S.ProductContainer>
  );
};
