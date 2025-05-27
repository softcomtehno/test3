import React from 'react';
import { Link } from 'react-router-dom';
import { FileCheck, Award, CheckCircle } from 'lucide-react';
import Button from '../ui/Button';
import { Card, CardContent } from '../ui/Card';

const CertificatesSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Сертификация и качество</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Вся продукция имеет необходимые сертификаты соответствия и отвечает требованиям безопасности
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border border-gray-200">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                <FileCheck size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Соответствие ГОСТ</h3>
              <p className="text-gray-600 mb-4">
                Все средства защиты соответствуют актуальным требованиям ГОСТ и имеют необходимые сертификаты
              </p>
              <Link to="/certificates/gost" className="text-blue-600 hover:underline mt-auto">
                Подробнее о сертификатах
              </Link>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-200">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-100 text-red-600 mb-4">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Международные стандарты</h3>
              <p className="text-gray-600 mb-4">
                Многие товары имеют международные сертификаты EN, ANSI и другие, соответствуя мировым стандартам
              </p>
              <Link to="/certificates/international" className="text-red-600 hover:underline mt-auto">
                Международные сертификаты
              </Link>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-200">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Проверка подлинности</h3>
              <p className="text-gray-600 mb-4">
                Вы можете проверить подлинность сертификатов по серийному номеру товара на нашем сайте
              </p>
              <Link to="/certificates/verify" className="text-green-600 hover:underline mt-auto">
                Проверить сертификат
              </Link>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-10">
          <Button variant="primary">
            <Link to="/certificates">Все сертификаты</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;