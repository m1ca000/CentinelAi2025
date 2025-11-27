import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Camera, Users, BarChart3, ArrowRight, CheckCircle } from 'lucide-react';

// Variantes de animación para Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Anima los hijos con un retraso
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-indigo-600 mr-3" />
              <span className="text-2xl font-bold">Centinelai</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Iniciar Sesión
              </Link>
              <Link
                to="/register"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Registrarse
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Seccion de intro */}
      <motion.section
        className="relative overflow-hidden py-24 md:py-32"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight" variants={itemVariants}>
              Sistema Inteligente de
              <span className="text-indigo-600 block">Control de Accesos</span>
            </motion.h1>
            <motion.p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto" variants={itemVariants}>
              Gestiona cámaras, molinetes y controla el acceso de usuarios con ayuda de nuestra plataforma de seguridad inteligente. Monitoreo en tiempo real y control total.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={itemVariants}>
              <Link
                to="/register"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                Comenzar Ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/login"
                className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-md"
              >
                Iniciar Sesión
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Seccion de Features */}
      <motion.section
        className="py-24 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-4" variants={itemVariants}>
              Características Principales
            </motion.h2>
            <motion.p className="text-lg text-gray-600" variants={itemVariants}>
              Todo lo que necesitas para gestionar tu sistema de seguridad
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-white shadow-md hover:shadow-xl transition-all" variants={itemVariants}>
              <Camera className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Control de Cámaras</h3>
              <p className="text-gray-600">Gestiona y monitorea todas tus cámaras desde un solo lugar</p>
            </motion.div>
            
            <motion.div className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-white shadow-md hover:shadow-xl transition-all" variants={itemVariants}>
              <Shield className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Molinetes Inteligentes</h3>
              <p className="text-gray-600">Control de acceso automatizado con tecnología avanzada</p>
            </motion.div>
            
            <motion.div className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-white shadow-md hover:shadow-xl transition-all" variants={itemVariants}>
              <Users className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Gestión de Usuarios</h3>
              <p className="text-gray-600">Administra permisos y accesos de forma centralizada</p>
            </motion.div>
            
            <motion.div className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-white shadow-md hover:shadow-xl transition-all" variants={itemVariants}>
              <BarChart3 className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Historial Completo</h3>
              <p className="text-gray-600">Registro detallado de todas las actividades del sistema</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Seccion como funciona */}
      <motion.section
        className="py-24 bg-gray-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-12" variants={itemVariants}>¿Cómo funciona?</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div className="p-6" variants={itemVariants}>
              <div className="h-16 w-16 mx-auto flex items-center justify-center rounded-full bg-indigo-50 text-indigo-600 text-2xl font-bold mb-6 shadow-md">1</div>
              <h3 className="text-xl font-semibold mb-2">Regístrate</h3>
              <p className="text-gray-600">Crea una cuenta en minutos y configura tu organización.</p>
            </motion.div>
            <motion.div className="p-6" variants={itemVariants}>
              <div className="h-16 w-16 mx-auto flex items-center justify-center rounded-full bg-indigo-50 text-indigo-600 text-2xl font-bold mb-6 shadow-md">2</div>
              <h3 className="text-xl font-semibold mb-2">Conecta tus dispositivos</h3>
              <p className="text-gray-600">Integra cámaras, molinetes y usuarios de forma centralizada.</p>
            </motion.div>
            <motion.div className="p-6" variants={itemVariants}>
              <div className="h-16 w-16 mx-auto flex items-center justify-center rounded-full bg-indigo-50 text-indigo-600 text-2xl font-bold mb-6 shadow-md">3</div>
              <h3 className="text-xl font-semibold mb-2">Monitorea y controla</h3>
              <p className="text-gray-600">Accede al panel en tiempo real y administra todo desde un solo lugar.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Seccion de beneficios */}
      <motion.section
        className="py-24 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={containerVariants}>
              <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" variants={itemVariants}>
                ¿Por qué elegir Centinelai?
              </motion.h2>
              <div className="space-y-6">
                <motion.div className="flex items-start" variants={itemVariants}>
                  <CheckCircle className="h-6 w-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Interfaz Intuitiva</h3>
                    <p className="text-gray-600">Diseño simple y fácil de usar para todos los usuarios</p>
                  </div>
                </motion.div>
                <motion.div className="flex items-start" variants={itemVariants}>
                  <CheckCircle className="h-6 w-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Monitoreo en Tiempo Real</h3>
                    <p className="text-gray-600">Visualiza el estado de todos tus dispositivos al instante</p>
                  </div>
                </motion.div>
                <motion.div className="flex items-start" variants={itemVariants}>
                  <CheckCircle className="h-6 w-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Seguridad Avanzada</h3>
                    <p className="text-gray-600">Protección de datos y acceso controlado por roles</p>
                  </div>
                </motion.div>
                <motion.div className="flex items-start" variants={itemVariants}>
                  <CheckCircle className="h-6 w-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Escalable</h3>
                    <p className="text-gray-600">Crece con tu negocio, desde pequeñas oficinas hasta grandes empresas</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            <motion.div className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-2xl p-8 text-white shadow-xl" variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4">Comienza hoy mismo</h3>
              <p className="text-indigo-200 mb-6">
                Únete a cientos de empresas que ya confían en Centinelai para su seguridad
              </p>
              <Link
                to="/register"
                className="bg-white text-indigo-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center shadow-lg"
              >
                Registrarse Gratis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Seccion de publi */}
      <motion.section
        className="py-24 bg-gradient-to-br from-indigo-600 to-indigo-800 text-white text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Tu seguridad comienza hoy</h2>
          <p className="text-indigo-200 text-lg mb-8">
            Empieza a controlar accesos y monitorear tus dispositivos con la potencia de Centinelai. Rápido, seguro y escalable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Crear Cuenta Gratis
            </Link>
            <Link
              to="/login"
              className="border-2 border-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Iniciar Sesión
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Shield className="h-8 w-8 text-indigo-400 mr-3" />
              <span className="text-2xl font-bold">Centinelai</span>
            </div>
            <div className="text-gray-400">
              © 2025 Centinelai.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};