import * as Yup from 'yup';


export const addCategoryValidationSchema = Yup.object().shape({
    name: Yup.string().required('Lütfen kategori adını giriniz.'),
    description: Yup
        .string().required("Lütfen açıklama giriniz")
        .min(10, "Açıklama en az 10 karakter olmalıdır")

})
